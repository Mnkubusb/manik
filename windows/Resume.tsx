"use client"
import { WindowControls } from '@/components';
import WindowWrapper from '@/hoc/WindowWrapper';
import { Download } from 'lucide-react';
import dynamic from 'next/dynamic';

const PdfViewer = dynamic(() => import('@/components/PdfViewer'),{ ssr: false })


const Resume = () => {
    return (
        <>
            <div id='window-header'>
                <WindowControls target="resume" />
                <h2>Resume.pdf</h2>

                <a href="files/resume.pdf" download className='cursor-pointer' title='Download Resume'>
                    <Download className='icon' />
                </a>
            </div>
            <PdfViewer />
        </>
    )
}

const ResumeWindow = WindowWrapper(Resume, 'resume')

export default ResumeWindow
