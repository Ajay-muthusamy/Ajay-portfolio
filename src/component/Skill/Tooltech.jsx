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
        },
        {
            source: "https://pngimg.com/uploads/photoshop/photoshop_PNG12.png"
        },
        {
            source: "https://cdn.jim-nielsen.com/macos/512/figma-2021-05-05.png"
        },
        {
            source: "https://cdn3d.iconscout.com/3d/free/thumb/free-adobe-illustrator-9234635-7516860.png"
        },
        {
            source: "https://cdn3d.iconscout.com/3d/premium/thumb/adobe-premiere-6347385-5588277.png"
        },
    ];

    return (
        <div>
            <main className='text-white text-center py-20 font-sans m-3'>
                <div>
                    <h1 className='text-4xl pb-8'> <span className='text-[#B968C7]'>Tools</span> I Use</h1>
                </div>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
                    {tools.map((data, index) => (
                        <div key={index} className="bg-[#2222399b] p-5 rounded-lg flex justify-center items-center">
                            <img src={data.source} alt={`Tool ${index}`} className='w-24 grayscale hover:grayscale-0'
                             />
                        </div>
                    ))}
                </div>

                
            </main>
        </div>
    );
}

export default Tooltech;
