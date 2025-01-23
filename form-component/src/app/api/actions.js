"use server";

const createPost = async (formData) => {
    console.log(formData.get('input-name'));
};
export default createPost;