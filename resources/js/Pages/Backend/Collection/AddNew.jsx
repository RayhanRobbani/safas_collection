import BackendLayout from "@/Layouts/BackendLayout";
import { Head, useForm, router } from "@inertiajs/react";
import '../../../../css/custom.css'
import ImageInput from "@/Components/Backend/ImageInput";
import TextInput from "@/Components/Backend/TextInput";
import DropdownInput from "@/Components/Backend/DropdownInput";
import { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';

export default function AddNew() {
    const { data, setData, post, progress, processing, errors, clearErrors, reset } = useForm({
        image_front: null,
        image_back: null,
        category: '',
        title: '',
        denomination: '',
        year: '',
        country: '',
        material: '',
        theme: '',
        remark: '',
        visibility_status: '',
    })

    const [frontUrl, setFrontUrl] = useState('')
    const [backUrl, setBackUrl] = useState('')

    const handleImageUpload = (e, url) => {
        clearErrors(e.target.id)
        setData(e.target.id, e.target.files[0])
    }

    const handleInputChange = (e) => {
        clearErrors(e.target.id)
        setData(e.target.id, e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        post(route('collection.store'), {
            preserveScroll: true,
            onSuccess: () => {
                setFrontUrl(''),
                setBackUrl(''),
                reset(),
                toast.success('Added to collection successfully!',
                    {
                        style: {
                            background: '#171920',
                            color: '#fff',
                        },
                    }
                )
            },
        })
    }

    return (
        <BackendLayout>
            <Toaster
                position="bottom-right"
            />

            <Head title="Add to Collection" />
            <div className="content-wrapper">
                <div className="page-header">
                    <h3 className="page-title"> Add more to Collection </h3>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="#">Collection</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Add New</li>
                        </ol>
                    </nav>
                </div>
                <div className="row">
                    <div className="col-12 grid-margin stretch-card">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Add New</h4>
                                <form className="forms-sample" onSubmit={handleSubmit}>
                                    <div className="form-group row">
                                        <label htmlFor="" className="col-sm-3 col-form-label">Images</label>
                                        <div className=" col-sm-9">
                                            <div className="row">
                                                <ImageInput
                                                    id="image_front"
                                                    url={frontUrl}
                                                    title="Front Image"
                                                    errors={errors.image_front}
                                                    onChange={e => handleImageUpload(e, setFrontUrl(URL.createObjectURL(e.target.files[0])))}
                                                />

                                                <ImageInput
                                                    id="image_back"
                                                    url={backUrl}
                                                    title="Back Image"
                                                    errors={errors.image_back}
                                                    onChange={e => handleImageUpload(e, setBackUrl(URL.createObjectURL(e.target.files[0])))}
                                                />
                                            </div>

                                            {progress && (
                                                <progress value={progress.percentage} max="100">
                                                    {progress.percentage}%
                                                </progress>
                                            )}

                                        </div>
                                    </div>

                                    <DropdownInput
                                        id="category"
                                        title="Category"
                                        value={data.category}
                                        errors={errors.category}
                                        onChange={e => handleInputChange(e)}
                                    >
                                        <option value={"Coin"}>Coin</option>
                                        <option value={"Banknote"}>Banknote</option>
                                    </DropdownInput>

                                    <TextInput
                                        id="title"
                                        title="Title"
                                        value={data.title}
                                        errors={errors.title}
                                        onChange={e => handleInputChange(e)}
                                    />

                                    <TextInput
                                        id="denomination"
                                        title="Denomination"
                                        value={data.denomination}
                                        errors={errors.denomination}
                                        onChange={e => handleInputChange(e)}
                                    />

                                    <TextInput
                                        id="year"
                                        title="Year"
                                        value={data.year}
                                        errors={errors.year}
                                        onChange={e => handleInputChange(e)}
                                    />

                                    <TextInput
                                        id="country"
                                        title="Country"
                                        value={data.country}
                                        errors={errors.country}
                                        onChange={e => handleInputChange(e)}
                                    />

                                    <TextInput
                                        id="material"
                                        title="Material"
                                        value={data.material}
                                        errors={errors.material}
                                        onChange={e => handleInputChange(e)}
                                    />

                                    <TextInput
                                        id="theme"
                                        title="Theme"
                                        value={data.theme}
                                        errors={errors.theme}
                                        onChange={e => handleInputChange(e)}
                                    />

                                    <div className="form-group row">
                                        <label htmlFor="remark" className="col-sm-3 col-form-label">Remark</label>
                                        <div className=" col-sm-9">
                                            <textarea className="form-control" id="remark" rows="4" value={data.remark} onChange={e => handleInputChange(e)}></textarea>
                                            {errors.remark && <div className="text-danger">{errors.remark}</div>}
                                        </div>
                                    </div>

                                    <DropdownInput
                                        id="visibility_status"
                                        title="Visibility"
                                        value={data.visibility_status}
                                        errors={errors.visibility_status}
                                        onChange={e => handleInputChange(e)}
                                    >
                                        <option value={0}>Hide</option>
                                        <option value={1}>Show</option>
                                    </DropdownInput>

                                    <button type="submit" className="btn btn-primary mr-2" disabled={processing}>Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </BackendLayout>
    );
}
