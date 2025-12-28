"use client"
import { WindowControls } from '@/components';
import WindowWrapper from '@/hoc/WindowWrapper';
import useWindowStore from '@/store/window';

const TextFile = () => {
    const { windows } = useWindowStore();
    const data = windows?.txtfile?.data as { name: string; image?: string; subtitle?: string; description?: string[] } | null;

    if (!data) return null;

    const { name, image, subtitle, description } = data;

    return (
        <>
            <div id='window-header'>
                <WindowControls target="txtfile" />
                <h2>{name}</h2>
            </div>
            <div className="p-4">
                {image && <img src={image} alt={name} className="mb-4" />}
                {subtitle && <h3 className="mb-2">{subtitle}</h3>}
                {description && description.map((para: string, index: number) => (
                    <p key={index} className="mb-2">{para}</p>
                ))}
            </div>
        </>
    );
};

const TextFileWindow = WindowWrapper(TextFile, 'txtfile');

export default TextFileWindow;
