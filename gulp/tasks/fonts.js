import fs from "fs";
import fonter from "gulp-fonter";
import ttf2woff2 from "gulp-ttf2woff2";

export const otfToTtf = () => {
    return app.gulp
        .src(`${app.path.srcFolder}/fonts/*.otf`, {})
        .pipe(
            app.plugins.plumber(
                app.plugins.notify.onError({
                    title: "FONTS",
                    message: "Error: <%= error.message %>",
                })
            )
        )
        .pipe(
            fonter({
                subset: [66, 67, 68, 69, 70, 71],
                formats: ["ttf"],
            })
        )
        .pipe(app.gulp.dest(`${app.path.srcFolder}/fonts/`));
};

export const ttfToWoff = () => {
    return app.gulp.src(`${app.path.srcFolder}/fonts/*.ttf`, {}).pipe(
        app.plugins
            .plumber(
                app.plugins.notify.onError({
                    title: "FONTS",
                    message: "Error: <%= error.message %>",
                })
            )
            .pipe(
                fonter({
                    formats: ["woff"],
                })
            )
            .pipe(app.gulp.dest(`${app.path.build.fonts}`))
            .pipe(app.gulp.src(`${app.path.srcFolder}/fonts/*.ttf`))
            .pipe(ttf2woff2())
            .pipe(app.gulp.dest(`${app.path.build.fonts}`))
    );
};
export const fontsStyle = () => {
    let fontsFile = `${app.path.srcFolder}/scss/fonts.scss`;
    fs.readdir(app.path.build.fonts, function (err, fontsFiles) {
        if (fontsFile) {
            if (!fs.existsSync(fontsFile)) {
                fs.writeFile(fontsFile, "", cb);
                let newFileOnly;
                for (let i = 0; i < fontsFiles.length; i++) {
                    let fontFileName = fontsFiles[i].split(".")[0];
                    if (newFileOnly !== fontFileName) {
                        let fontName = fontFileName.split("-")[0] ? fontFileName.split("-")[0] : fontFileName;
                        let fontWeight = fontFileName.split("-")[1] ? fontFileName.split("-")[1] : fontFileName;
                        let fontStyle = fontFileName.split("-")[2] ? fontFileName.split("-")[2].toLowerCase() : 'normal';
                        switch (fontWeight.toLowerCase()) {
                            case "thin":
                                fontWeight = 100;
                                break;
                            case "extralight":
                                fontWeight = 200;
                                break;
                            case "light":
                                fontWeight = 300;
                                break;
                            case "medium":
                                fontWeight = 500;
                                break;
                            case "semibold":
                                fontWeight = 600;
                                break;
                            case "bold":
                                fontWeight = 700;
                                break;
                            case "extrabold" || "heavy":
                                fontWeight = 800;
                                break;
                            case "black":
                                fontWeight = 900;
                                break;
                            case "thin":
                                fontWeight = 900;
                                break;
                            default:
                                fontWeight = 400;
                        }
                        fs.appendFile(
                            fontsFile,
                            `@font-face {\n\tfont-family: "${fontName}";\n\tfont-display: swap;\n\tsrc: url("../fonts/${fontFileName}.ttf") format("ttf"), url("../fonts/${fontFileName}.ttf") format("ttf");\n\tfont-weight: ${fontWeight};\n\tfont-style: ${fontStyle};\n\t}\r\n`,
                            cb
                        );
                        newFileOnly = fontFileName;
                    }
                }
            } else {
                console.log("Файл scss/fonts.scss уже существует. Для обновления нужно его удалить");
            }
        }
    });
    return app.gulp.src(`${app.path.srcFolder}`);
    function cb() {}
};
