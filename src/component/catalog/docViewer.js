import DocViewer from "react-doc-viewer";

function CustomDocViewer() {
    const docs = [
        { uri: "http://localhost:8080/api/attach/doc-for-applicant" }
    ];

    return <DocViewer documents={docs} />;
}

export default CustomDocViewer;