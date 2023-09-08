const ffmpeg = require('fluent-ffmpeg');
const ffmpegInstaller = require('@ffmpeg-installer/ffmpeg');

ffmpeg.setFfmpegPath(ffmpegInstaller.path);

ffmpeg('videos/video.mp4', { timeout: 432000 }).addOptions([
    '-profile:v baseline',
    '-level 3.0',
    '-start_number 0',
    '-hls_time 10',
    '-hls_list_size 0',
    '-f hls'
]).output('videos/output.m3u8').on('end', () => {
    console.log('end');
}).run();

// "@ffmpeg-installer/ffmpeg": "^1.0.20",
// "express": "^4.17.1",
// "fluent-ffmpeg": "^2.1.2",
// "hls-server": "^1.5.0"