import { execSync } from 'child_process';
import { createWriteStream } from 'fs';
import path from 'path';

export const savePNG = async (canvas, filename) =>
    new Promise(resolve => {
        const out = createWriteStream(filename);
        const stream = canvas.createPNGStream();
        stream.pipe(out);
        out.on('finish', resolve);
    });

export const saveMP4 = ({
    pattern,
    numZeros = 3,
    inputDir,
    output,
    framerate = 4
}) => {
    execSync(
        `ffmpeg -framerate ${framerate} -y -f image2 -i ${pattern}%0${numZeros}d.png -c:v libx264 -pix_fmt yuv420p -profile:v baseline -level 3.0 -an -crf 25 -framerate ${framerate} ${path.resolve(
            output
        )}`,
        {
            cwd: path.resolve(inputDir),
            stdio: [0, 1, 2]
        }
    );
};
