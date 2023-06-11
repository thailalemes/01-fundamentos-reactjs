// props: {author: 'Hello World', content: 'Welcome to learning React!'}

export function Post(props) {
    return (
    <div> 
    <strong>{props.author}</strong> 
    <p>{props.content}</p>
    </div>
    )
}