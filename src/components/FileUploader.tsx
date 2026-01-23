
import React from 'react';
import { Upload, FileText, AlertCircle, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface FileUploaderProps {
    accept: Record<string, string[]>;
    label: string;
    onFileSelect: (file: File) => void;
    isLoading?: boolean;
}

export function FileUploader({ accept, label, onFileSelect, isLoading }: FileUploaderProps) {
    const [dragActive, setDragActive] = React.useState(false);
    const inputRef = React.useRef<HTMLInputElement>(null);
    const [selectedFile, setSelectedFile] = React.useState<File | null>(null);
    const [error, setError] = React.useState<string | null>(null);

    const handleDrag = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true);
        } else if (e.type === "dragleave") {
            setDragActive(false);
        }
    };

    const validateAndSetFile = (file: File) => {
        setError(null);
        if (file.size > 5 * 1024 * 1024) {
            setError("File size must be less than 5MB");
            return;
        }
        // Basic type check based on accept prop
        // (Simplified for this component, relying on input accept mostly)

        setSelectedFile(file);
        onFileSelect(file);
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            validateAndSetFile(e.dataTransfer.files[0]);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        if (e.target.files && e.target.files[0]) {
            validateAndSetFile(e.target.files[0]);
        }
    };

    const triggerFileInput = () => {
        inputRef.current?.click();
    };

    const removeFile = (e: React.MouseEvent) => {
        e.stopPropagation();
        setSelectedFile(null);
        setError(null);
        if (inputRef.current) inputRef.current.value = '';
    };

    return (
        <div className="w-full">
            <div
                className={cn(
                    "relative border-2 border-dashed rounded-lg p-8 transition-colors flex flex-col items-center justify-center cursor-pointer min-h-[200px]",
                    dragActive ? "border-blue-500 bg-blue-50" : "border-slate-300 hover:bg-slate-50",
                    isLoading && "opacity-50 cursor-not-allowed",
                    selectedFile && "border-green-500 bg-green-50"
                )}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
                onClick={!selectedFile ? triggerFileInput : undefined}
            >
                <input
                    ref={inputRef}
                    className="hidden"
                    type="file"
                    accept={Object.values(accept).flat().join(',')}
                    onChange={handleChange}
                    disabled={isLoading}
                />

                {isLoading ? (
                    <div className="flex flex-col items-center gap-2">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                        <p className="text-sm font-medium text-slate-600">Processing file...</p>
                    </div>
                ) : selectedFile ? (
                    <div className="flex flex-col items-center gap-3">
                        <div className="p-3 bg-white rounded-full shadow-sm">
                            <FileText className="w-8 h-8 text-green-600" />
                        </div>
                        <div className="text-center">
                            <p className="font-medium text-slate-900">{selectedFile.name}</p>
                            <p className="text-sm text-slate-500">{(selectedFile.size / 1024).toFixed(1)} KB</p>
                        </div>
                        <Button variant="ghost" size="sm" onClick={removeFile} className="text-red-500 hover:text-red-700 hover:bg-red-50">
                            Change File
                        </Button>
                    </div>
                ) : (
                    <div className="flex flex-col items-center gap-3 text-center">
                        <div className="p-3 bg-slate-100 rounded-full">
                            <Upload className="w-8 h-8 text-slate-400" />
                        </div>
                        <div className="space-y-1">
                            <p className="text-lg font-medium text-slate-700">
                                Click to upload or drag and drop
                            </p>
                            <p className="text-sm text-slate-500">
                                {label} (Max 5MB)
                            </p>
                        </div>
                    </div>
                )}
            </div>
            {error && (
                <div className="flex items-center gap-2 mt-3 text-red-600 text-sm font-medium animate-in slide-in-from-top-1">
                    <AlertCircle className="w-4 h-4" />
                    {error}
                </div>
            )}
        </div>
    );
}
