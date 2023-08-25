'use client';
import { useState } from 'react';

export default function File() {
    const [uploadFile, setUploadFile] = useState<File | null>(null);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files && files[0]) {
            setUploadFile(files[0]);
        }
    };
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!uploadFile) {
            return;
        }
        const formData = new FormData();
        formData.append('file', uploadFile);
        
        const res = await fetch('http://localhost:3000/api/upload', {
            method: 'POST',
            body: formData,
        });
        const message = await res.json();
        console.log(message);
    };
    return (
    <div>
        <h1>ファイルアップロード</h1>
        <form onSubmit={handleSubmit}>
            <input name="file" type="file" onChange={handleChange} />
            <button type="submit">アップロード</button>
        </form>
    </div>
    );
}