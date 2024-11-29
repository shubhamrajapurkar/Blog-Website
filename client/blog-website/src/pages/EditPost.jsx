import { useEffect, useState } from 'react';
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css'
import { Navigate, useParams } from 'react-router-dom';
import Editor from '../Editor';



export default function EditPost(){
    const{id}= useParams();
    const[title,setTitle]=useState("");
    const[summary,setSummary]=useState("");
    const[content,setContent]=useState("");
    const[files,setFiles]=useState("");
    const[cover,setCover]=useState("");
    const[redirect,setRedirect]=useState(false);

    useEffect(()=>{
        fetch(`http://localhost:3000/post/${id}`)
        .then(response=>{
            response.json().then(postInfo=>{
                setTitle(postInfo.title);
                setSummary(postInfo.summary);
                setContent(postInfo.content);
                setCover(postInfo)
                // console.log(postInfo)
            })
        })
    },[])

    async function updatePost(event){
        event.preventDefault();
        const data=new FormData();
        data.set('id',id);
        data.set('title',title);
        data.set('summary',summary);
        data.set('content',content);
        if(files?.[0]){
            data.set('file',files?.[0]);
        }
        const response=await fetch('http://localhost:3000/post',{
            method:'PUT',
            body:data,
            credentials:'include'
        })
        if(response.ok){
            setRedirect(true)
        }
        
    }

    if(redirect){
        return <Navigate to={'/post/'+id}/> 
    }
    return(
        <form action="" onSubmit={updatePost}>
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
            <button style={{marginTop: '15px'}}>Edit post</button>   
        </form>
    )
}