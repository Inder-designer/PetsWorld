import React, { useState, useRef, useEffect } from 'react';
import './textEditor.css'; // Ensure this file contains styles for .editor and .editor-toolbar
import html2pdf from 'html2pdf.js'; // Ensure you have this dependency installed
import { AttachFileOutlined, EditOutlined, FormatAlignCenterOutlined, FormatAlignJustify, FormatAlignLeftOutlined, FormatAlignRightOutlined, FormatBoldOutlined, FormatIndentDecreaseOutlined, FormatIndentIncreaseOutlined, FormatItalicOutlined, FormatListBulletedOutlined, FormatListNumberedOutlined, FormatStrikethroughOutlined, FormatUnderlined, LinkOffOutlined, LinkOutlined, RedoOutlined, SubscriptOutlined, SuperscriptOutlined, UndoOutlined } from '@mui/icons-material';

const CustomTextEditor = () => {
    const [isCodeView, setIsCodeView] = useState(false);
    const [filename, setFilename] = useState('untitled');
    const [selectedImage, setSelectedImage] = useState(null); // For managing selected image
    const [imageDimensions, setImageDimensions] = useState({ width: '', height: '' });
    const [imageFloat, setImageFloat] = useState(''); // New state for image float
    const editorRef = useRef(null);

    // Initialize the editor content
    useEffect(() => {
        if (editorRef.current) {
            editorRef.current.innerHTML = `
                <p>Lorem ipsum dolor sit amet.</p> <!-- Default content -->
            `;
        }
    }, []);

    // Update editor content
    const updateEditorContent = (html) => {
        if (editorRef.current) {
            editorRef.current.innerHTML = html;
        }
    };

    // Format document based on command
    const formatDoc = (cmd, value = null) => {
        if (editorRef.current) {
            document.execCommand(cmd, false, value);
        }
    };

    // Add a link to the content
    const addLink = () => {
        const url = prompt('Insert URL');
        formatDoc('createLink', url);
    };

    // Insert an image into the content
    const insertImage = () => {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/*';
        input.style.display = 'none';
        document.body.appendChild(input);

        input.addEventListener('change', () => {
            const file = input.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    const imgHtml = `
                        <span class="image-container" style="float: ${imageFloat};">
                            <img src="${e.target.result}" alt="Image"/>
                        </span>
                    `;
                    if (editorRef.current) {
                        const selection = document.getSelection();
                        if (selection.rangeCount > 0) {
                            const range = selection.getRangeAt(0);
                            range.deleteContents(); // Remove selected content if any
                            range.insertNode(document.createRange().createContextualFragment(imgHtml));
                        } else {
                            editorRef.current.insertAdjacentHTML('beforeend', imgHtml);
                        }
                    }
                };
                reader.readAsDataURL(file);
            }
        });

        input.click();
        document.body.removeChild(input);
    };

    // Handle image click to show edit modal
    const handleImageClick = (e) => {
        if (e.target.tagName === 'IMG') {
            setSelectedImage(e.target);
            setImageDimensions({ width: e.target.width, height: e.target.height });
        }
    };

    // Handle file actions such as new, txt, or pdf
    const handleFileAction = (action) => {
        if (editorRef.current) {
            const htmlContent = editorRef.current.innerHTML;
            if (action === 'new') {
                updateEditorContent('<p>Lorem ipsum dolor sit amet.</p>'); // Start with default paragraph
                setFilename('untitled');
            } else if (action === 'txt') {
                const blob = new Blob([editorRef.current.innerText], { type: 'text/plain' });
                const url = URL.createObjectURL(blob);
                const link = document.createElement('a');
                link.href = url;
                link.download = `${filename}.txt`;
                link.click();
            } else if (action === 'pdf') {
                const opt = {
                    margin: 1,
                    filename: `${filename}.pdf`,
                    image: { type: 'jpeg', quality: 0.98 },
                    html2canvas: { scale: 2 },
                    jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
                };
                html2pdf().set(opt).from(editorRef.current).save();
            }
        }
    };

    // Toggle code view to show raw HTML
    const handleCodeViewToggle = () => {
        if (editorRef.current) {
            setIsCodeView(!isCodeView);
            if (!isCodeView) {
                // Switch to code view
                editorRef.current.contentEditable = 'false';
                const content = editorRef.current.innerHTML;
                editorRef.current.innerText = content;
            } else {
                // Switch back to WYSIWYG view
                const content = editorRef.current.innerText;
                editorRef.current.innerHTML = content;
                editorRef.current.contentEditable = 'true';
            }
        }
    };

    // Apply new dimensions to selected image
    const applyImageDimensions = () => {
        if (selectedImage) {
            selectedImage.width = imageDimensions.width;
            selectedImage.height = imageDimensions.height;
            setSelectedImage(null);
        }
    };

    // Apply float style to the selected image
    const applyImageFloat = (float) => {
        if (selectedImage) {
            const parent = selectedImage.parentElement;
            parent.style.float = float;
            setImageFloat(float);
        }
    };

    return (
        <div className='border'>
            <div className="editor-toolbar border-b">
                <div className="toolbar">
                    <div className="head">
                        <input
                            type="text"
                            placeholder="Filename"
                            value={filename}
                            onChange={(e) => setFilename(e.target.value)}
                        />
                        <select onChange={(e) => handleFileAction(e.target.value)} defaultValue="">
                            <option value="" disabled hidden>File</option>
                            <option value="new">New file</option>
                            <option value="txt">Save as txt</option>
                            <option value="pdf">Save as pdf</option>
                        </select>
                        <select onChange={(e) => formatDoc('formatBlock', e.target.value)} defaultValue="">
                            <option value="p" selected>Paragraph</option>
                            <option value="h1">Heading 1</option>
                            <option value="h2">Heading 2</option>
                            <option value="h3">Heading 3</option>
                            <option value="h4">Heading 4</option>
                            <option value="h5">Heading 5</option>
                            <option value="h6">Heading 6</option>
                        </select>
                        <select onChange={(e) => formatDoc('fontSize', e.target.value)} defaultValue="">
                            <option value="" disabled hidden>Font size</option>
                            <option value="1">Extra small</option>
                            <option value="2">Small</option>
                            <option value="3">Regular</option>
                            <option value="4">Medium</option>
                            <option value="5">Large</option>
                            <option value="6">Extra Large</option>
                            <option value="7">Big</option>
                        </select>
                        <div className="color">
                            <span>Color</span>
                            <input
                                type="color"
                                onChange={(e) => formatDoc('foreColor', e.target.value)}
                            />
                        </div>
                        <div className="color">
                            <span>Background</span>
                            <input
                                type="color"
                                onChange={(e) => formatDoc('hiliteColor', e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="btn-toolbar">
                        <button type="button" onClick={() => formatDoc('undo')}><UndoOutlined /></button>
                        <button type="button" onClick={() => formatDoc('redo')}><RedoOutlined /></button>
                        <button type="button" onClick={() => formatDoc('bold')}><FormatBoldOutlined /></button>
                        <button type="button" onClick={() => formatDoc('underline')}><FormatUnderlined /></button>
                        <button type="button" onClick={() => formatDoc('italic')}><FormatItalicOutlined /></button>
                        <button type="button" onClick={() => formatDoc('strikeThrough')}><FormatStrikethroughOutlined /></button>
                        <button type="button" onClick={() => formatDoc('superScript')}><SuperscriptOutlined /></button>
                        <button type="button" onClick={() => formatDoc('SubScript')}><SubscriptOutlined /></button>
                        <button type="button" onClick={() => formatDoc('justifyLeft')}><FormatAlignLeftOutlined /></button>
                        <button type="button" onClick={() => formatDoc('justifyCenter')}><FormatAlignCenterOutlined /></button>
                        <button type="button" onClick={() => formatDoc('justifyRight')}><FormatAlignRightOutlined /></button>
                        <button type="button" onClick={() => formatDoc('justifyFull')}><FormatAlignJustify /></button>
                        <button type="button" onClick={() => formatDoc('insertOrderedList')}><FormatListNumberedOutlined /></button>
                        <button type="button" onClick={() => formatDoc('insertUnorderedList')}><FormatListBulletedOutlined /></button>
                        <button type="button" onClick={() => formatDoc('outdent')}><FormatIndentDecreaseOutlined /></button>
                        <button type="button" onClick={() => formatDoc('indent')}><FormatIndentIncreaseOutlined /></button>
                        <button type="button" onClick={addLink}><LinkOutlined /></button>
                        <button type="button" onClick={() => formatDoc('unlink')}><LinkOffOutlined /></button>
                        <button type="button" onClick={insertImage}><AttachFileOutlined /></button>
                        <button type="button" ><EditOutlined /></button>
                        <button type="button" onClick={handleCodeViewToggle} data-active={isCodeView}>&lt;/&gt;</button>
                    </div>
                </div>
            </div>
            <div className='w-full'>
                <div
                    ref={editorRef}
                    contentEditable
                    onClick={handleImageClick}
                    className='overflow-x-hidden'
                    style={{ padding: '10px' }}
                />

            </div>
            {selectedImage && (
                <div className="image-edit-popup">
                    <h4>Edit Image Dimensions</h4>
                    <div className='flex items-center'>
                        <label className='text-sm !flex flex-col'>
                            Width:
                            <input
                                type="number" className='text-sm p-1 px-2 !ml-0 !w-[78px]'
                                value={imageDimensions.width}
                                onChange={(e) => setImageDimensions({ ...imageDimensions, width: e.target.value })}
                            />
                        </label>
                        <span className='mt-4 px-2'>X</span>
                        <label className='text-sm !flex flex-col'>
                            Height:
                            <input
                                type="number" className='text-sm p-1 px-2 !ml-0 !w-[78px]'
                                value={imageDimensions.height}
                                onChange={(e) => setImageDimensions({ ...imageDimensions, height: e.target.value })}
                            />
                        </label>
                    </div>
                    <div className="float-options">
                        <label className='text-xs !mt-0 !mb-1'>
                            <input
                                type="radio" className='!w-2 !h-2 !ml-0 mr-1'
                                name="float"
                                value="left"
                                checked={imageFloat === 'left'}
                                onChange={() => applyImageFloat('left')}
                            />
                            Float Left
                        </label>
                        <label className='text-xs !mt-0 !mb-1'>
                            <input
                                type="radio" className='!w-2 !h-2 !ml-0 mr-1'
                                name="float"
                                value="right"
                                checked={imageFloat === 'right'}
                                onChange={() => applyImageFloat('right')}
                            />
                            Float Right
                        </label>
                        <label className='text-xs !mt-0 !mb-1'>
                            <input
                                type="radio" className='!w-2 !h-2 !ml-0 mr-1'
                                name="float"
                                value=""
                                checked={imageFloat === ''}
                                onChange={() => applyImageFloat('')}
                            />
                            None
                        </label>
                    </div>
                    <button onClick={applyImageDimensions}>Apply</button>
                    <button onClick={() => setSelectedImage(null)}>Cancel</button>
                </div>
            )}
        </div>
    );
};

export default CustomTextEditor;
