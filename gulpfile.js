const gulp = require("gulp");
const ts = require("gulp-typescript");
const nodemon = require("gulp-nodemon");
const JSON_FILES = ["src/*.json", "src/**/*.json"];

// pull in the project TypeScript config
const tsProject = ts.createProject("tsconfig.json");

gulp.task("build", () => {
  const tsResult = tsProject.src().pipe(tsProject());
  gulp.src(JSON_FILES).pipe(gulp.dest("dist"));
  return tsResult.js.pipe(gulp.dest("dist"));
});

gulp.task("start", ["build"], function(done) {
  nodemon({
    script: "dist/index.js",
    ext: "ts json",
    env: { NODE_ENV: "development" },
    done: done,
    tasks: ["build"],
    ignore: ["dist/", "node_modules/"]
  });
});

gulp.task("default", ["watch", "assets"]);
