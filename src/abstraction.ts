// abstraction 

/*
    1. Interface
    2. abstract class
 */

// gives Idea
// interface MediaPlayer {
//     play(): void;
//     pause(): void;
//     stop(): void;
// }

// class MusicPlayer implements MediaPlayer {
//     play(): void {
//         console.log(`playing Music...`);
//     };
//     pause(): void {
//         console.log(`Music Paused`);
//     };
//     stop(): void {
//         console.log(`Music Stopeed.`);
//     }
// }


// const AhmedPlayer = new MusicPlayer()
// AhmedPlayer.play()


// idea
abstract class MediaPlayer {
    abstract play(): void;
    abstract pause(): void;
    abstract stop(): void;
}
// Implementation 
class AhmedPlayer extends MediaPlayer {
    play(): void {
        console.log(`playing Musinc....`);
    };
    pause(): void {
        console.log(`Music Paused.`);
    };
    stop(): void {
        console.log(`Music Stopeed`);
    };
}

const AhmedPlayer1 = new AhmedPlayer();
AhmedPlayer1.play()