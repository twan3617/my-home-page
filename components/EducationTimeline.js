const EducationTimeline = () => {
    return     <section className="education p-5">
    <h2 className="text-3xl font-mono text-center text-dark-teal p-5">
        Education
    </h2>
    <ol className="relative border-l border-black">
        <li className="mb-10 ml-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white bg-black"></div>
            <time className="font-mono mb-1 text-sm  leading-none ">2021 - 2022</time>
            <h3 className="font-mono  text-lg font-bold">Masters of Mathematics with Excellence @ UNSW</h3>
            <section className="education-thesis">
                <p className="mb-4 text-base">
                    <h5 className="font-mono  font-semibold">
                        <a href="assets/thesis/masters_thesis_tw.pdf" className="underline text-teal">Thesis</a>: Theoretical Results on the Lasso and a new Root-Log Regulariser in High-Dimensional Linear Regression
                    </h5>
                    <p className="indent-5">Model selection consistency refers to the ability of an over-specified regression model to extract out variables that are 
                        actually relevant in the true model. In this thesis, I lay out the conditions required for the lasso to be model selection consistent. I then prove that a newly defined <span className="text-teal">root-log</span> regularised regression model achieves model selection consistency under less restrictive conditions than the lasso.
                    </p>

                    <p> Achieved an average mark of 93 with a thesis mark of 96.  </p>
                </p>    
            </section>
        </li>
        <li className="mb-10 ml-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white bg-black"></div>
            <time className="font-mono mb-1 text-sm  leading-none ">2016 - 2020</time>
            <h3 className="font-mono  text-lg font-bold">Bachelor of Science (Advanced) (Honours in Pure Mathematics) @ USYD</h3>
            <section className="education-thesis">
                <p className=" mb-4 text-base">
                    <h5 className="font-semibold font-mono">
                        <a href="./assets/thesis/honours_thesis_tw.pdf" className="underline text-teal">Thesis</a>: Analysis, Pseudomonotone Operators and Applications to the Existence of Solutions of Anisotropic Elliptic Equations
                    </h5>
                    <p className="indent-5">In this thesis, I lay out the pre-requisite theory required to prove that solutions exist to elliptic partial differential equations. The theory is then applied to a large class of 
                        anisotropic elliptic equations to show that they admit a solution under some broad assumptions.
                    </p>
                    <p> Achieved an average mark of 92 with a thesis mark of 95.</p>
                </p>    
            </section>
        </li>
        <li className="mb-10 ml-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white bg-black"></div>
            <time className="font-mono mb-1 text-sm  leading-none ">2018</time>
            <h3 className="font-mono  text-lg font-bold">Exchange @ University of California, Berkeley</h3>
                <p className="mb-4 text-base">
                    <p className="indent-5"> Fall 2018, taking PDEs, Probability Theory, Real Analysis and Discrete Mathematics. More importantly, I made life-long memories and life-long friends!
                    </p>
                </p>    
        </li>
    </ol>
    </section>
}

export default EducationTimeline