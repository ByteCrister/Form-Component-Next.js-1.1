import Form from "next/form"
import createPost from "../actions"

const Create = () => {
    return (
        <Form action={createPost}>
            <input name="input-name" placeholder="name"></input>
            <button type="submit">Click</button>
        </Form>
    )
}

export default Create