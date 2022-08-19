import { open } from '@tauri-apps/api/dialog';
import {
  BaseDirectory,
  createDir,
  readBinaryFile,
  readDir,
  writeBinaryFile,
} from '@tauri-apps/api/fs';
import { useRef } from 'react';

const IMAGE_DIR = 'images';

const ImageSave = () => {
  const imgRef = useRef<HTMLImageElement>(null);

  const handleOpenFile = async () => {
    const selected = await open({
      multiple: false,
      filters: [
        {
          name: 'Image',
          extensions: ['png', 'jpeg'],
        },
      ],
    });

    if (selected === null) return;

    const bytes = await readBinaryFile(selected as string);
    const entries = await readDir(IMAGE_DIR, { dir: BaseDirectory.App });
    if (entries.length === 0) {
      await createDir(IMAGE_DIR, { dir: BaseDirectory.App });
    }

    writeBinaryFile(`${IMAGE_DIR}/test${Date.now()}.png`, bytes, {
      dir: BaseDirectory.App,
    });

    const blob = new Blob([bytes], { type: 'image/png' });
    const url = URL.createObjectURL(blob);
    if (imgRef.current) imgRef.current.src = url;
  };

  return (
    <div>
      <button onClick={handleOpenFile}>open file</button>
      <img src="" alt="" ref={imgRef} width="300px" height="300px" />
    </div>
  );
};

export default ImageSave;
