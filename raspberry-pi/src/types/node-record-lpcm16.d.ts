declare module "node-record-lpcm16" {
  import { Readable } from "stream";

  interface RecordOptions {
    sampleRate?: number;
    channels?: number;
    thresholdStart?: number;
    thresholdEnd?: number;
    silence?: string;
    device?: string;
    endOnSilence?: boolean;
    recorder?: string;
    audioType?: string;
    verbose?: boolean;
  }

  interface Recording {
    stop(): void;
    pause(): void;
    resume(): void;
    isPaused(): boolean;
    stream(): Readable;
  }

  interface Recorder {
    record(options?: RecordOptions): Recording;
  }

  const recorder: Recorder;
  export = recorder;
}