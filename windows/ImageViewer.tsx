"use client"
import { WindowControls } from '@/components';
import WindowWrapper from '@/hoc/WindowWrapper';
import useWindowStore from '@/store/window';

const ImageViewer = () => {
    const { windows } = useWindowStore();
    const data = windows?.imgfile?.data as { name: string; imageUrl: string } | null;

    if (!data) return null;

    const { name, imageUrl } = data;

    return (
        <>
            <div id='window-header'>
                <WindowControls target="imgfile" />
                <h2>{name}</h2>
            </div>
            <div className="p-4 flex justify-center items-center">
                {imageUrl && <img src={imageUrl} alt={name} className="max-w-full max-h-full object-contain" />}
            </div>
        </>
    );
};

const ImageViewerWindow = WindowWrapper(ImageViewer, 'imgfile');

export default ImageViewerWindow;