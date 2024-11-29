import { useState } from 'react';
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css'
import { Navigate } from 'react-router-dom';

export default function CreatePage(){
    const[title,setTitle]=useState("");
    const[summary,setSummary]=useState("");
    const[content,setContent]=useState("");
    const[files,setFiles]=useState("");
    const[redirect,setRedirect]=useState(false);
    
    async function createPost(event){
        const data=new FormData();
        data.set('title',title);
        data.set('summary',summary);
        data.set('content',content);
        data.set('file',files[0]);
        event.preventDefault();
        console.log(files);
        const response=await fetch('http://localhost:3000/post',{
            method:'POST',
            body: data,
            credentials:'include',
        });
        if(response.ok){
            setRedirect(true);
        }
        
    }

    if(redirect){
        return <Navigate to={'/'}/>
    }
    return(
        <form action="" onSubmit={createPost}>
            <input type="title" 
                    placeholder={"Title"} 
                    value={title} 
                    onChange={event=>setTitle(event.target.value)}/>

            <input type="summary" 
                    placeholder={"Summary"}
                    value={summary}
                    onChange={ev=>setSummary(ev.target.value)}/>

            <input type="file" 
                    placeholder=""
                    // value={files}
                    onChange={ev=>setFiles(ev.target.files)}/>

            <Editor onChange={setContent} value={content}/>

            <button style={{marginTop: '15px'}}>Create post</button>   
        </form>
    )
}