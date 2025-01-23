import Form from 'next/form';

const SearchForm = () => {
    return (
        <Form action={'/search'}
            className='flex justify-between items-center gap-2'>

            <input name='query' placeholder='search...'
                className='p-1 rounded border-slate-600 outline-none bg-slate-400'
            ></input>

            <button type='submit'
                className="bg-slate-900 text-white font-semibold rounded px-4 py-2 hover:bg-slate-500 transition duration-200 ease-in-out"
            >Click</button>
        </Form>
    )
}

export default SearchForm