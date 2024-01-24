import '../../../../src/assets/scss/components/section_aside/AsideBar.scss'

export default function AsideBar() {
    return (
        <>
            <div className='clear-fixed'></div>
            <section>
                <aside>
                    <div>
                        <button><i className="fa-regular fa-image"></i></button>
                        <button><i className="fa-solid fa-sliders"></i></button>
                        <button><i className="fa-regular fa-eye"></i></button>
                        <button><i className="fa-solid fa-wand-magic-sparkles"></i></button>
                        <button><i className="fa-solid fa-palette"></i></button>
                        <button><i className="fa-solid fa-panorama"></i></button>
                        <button><i className="fa-solid fa-icons"></i></button>
                        <button><i className="fa-solid fa-square-pen"></i></button>
                        <button><i className="fa-solid fa-font"></i></button>
                        <button><i className="fa-solid fa-layer-group"></i></button>

                        <div className='clear-fixed'>

                        </div>
                    </div>
                </aside>
            </section>
            <div className='clear-fixed'></div>
        </>
    )

}