declare module 'jspdf' {
    export class jsPDF {
        constructor();
        fromHTML: (html: string, x: number, y: number, options: any) => void;
        save: (filename: string) => void;
    }
    export namespace jsPDF {
        export function getInstance(): jsPDF;
    }
}
