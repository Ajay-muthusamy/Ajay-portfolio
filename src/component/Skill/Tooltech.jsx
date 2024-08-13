import React from 'react';

const Tooltech = () => {
    const tools = [
        {
            source: "https://logodownload.org/wp-content/uploads/2019/12/windows-logo-2-1229x1536.png"
        },
        {
            source: "https://raw.githubusercontent.com/dhanishgajjar/vscode-icons/master/png/default_dark.png"
        },
        {
            source: "http://getdrawings.com/free-icon/postman-icon-69.png"
        },
        {
            source: "https://img.icons8.com/?size=100&id=6RHskkZGRABM&format=png&color=000000"
        }
    ];

    return (
        <div>
            <main className='text-white text-center py-20 font-sans m-3'>
                <div>
                    <h1 className='text-4xl pb-8'> <span className='text-[#B968C7]'>Tools </span>I Use</h1>
                </div>
                <div className='text-white  grid    md:grid-flow-col justify-center gap-5'>
                    {tools.map((data, index) => (
                        <div key={index} className="bg-[#2222399b] p-5 rounded-lg">
                            <img src={data.source} alt={`Tool ${index}`} className='w-24'/>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}

export default Tooltech;
