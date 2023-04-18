import { useEffect } from 'react';
import Checkbox from '@/Components/Checkbox';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, useForm } from '@inertiajs/react';
import FrontendLayout from "@/Layouts/FrontendLayout";

export default function Login({ status }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: '',
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const handleOnChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    return (
        <FrontendLayout>
            <Head title="Contact" />

            {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}

            <main id="main" data-aos="fade" data-aos-delay="500" style={{ paddingTop: 120 }}>

                <section id="contact" className="contact">
                    <div className="container">

                        <div className="row justify-content-center mt-4">

                            <div className="col-lg-3">
                                <form onSubmit={submit} className="php-email-form">

                                    <div>
                                        <TextInput
                                            id="email"
                                            type="email"
                                            name="email"
                                            value={data.email}
                                            className="form-control"
                                            autoComplete="email"
                                            isFocused={true}
                                            onChange={handleOnChange}
                                            placeholder="Email"
                                        />

                                        <InputError message={errors.email} className="mt-2 text-danger" />
                                    </div>

                                    <div>
                                        <TextInput
                                            id="password"
                                            type="password"
                                            name="password"
                                            value={data.password}
                                            className="form-control"
                                            autoComplete="current-password"
                                            onChange={handleOnChange}
                                            placeholder="Password"
                                        />

                                        <InputError message={errors.password} className="mt-2 text-danger" />
                                    </div>

                                    <div className="text-center">

                                        <div>
                                            <label className="d-flex justify-content-center">
                                                <Checkbox name="remember" defaultValue={data.remember} onChange={handleOnChange}/>
                                                <span style={{ paddingLeft : 10, marginTop : 10 }}>Remember me</span>
                                            </label>
                                        </div>

                                        <PrimaryButton className="mt-3" disabled={processing}>
                                            Log in
                                        </PrimaryButton>

                                    </div>

                                </form>
                            </div>

                        </div>

                    </div>
                </section>

            </main>
        </FrontendLayout>
    );
}
