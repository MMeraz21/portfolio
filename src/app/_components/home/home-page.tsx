"use client"

export function HomePage() {
    return (
        <div className="flex flex-row items-start pl-8 bg-red-500 min-h-screen" >
            <div className="w-[450px] h-[700px] bg-gray-200 border-4 border-black rounded-lg flex items-center justify-center">
                {/* This is a placeholder div that looks like an image. Replace with actual Image component when ready */}
                <span className="text-gray-600">300x300 Image</span>
            </div>
            <div className="ml-8 mt-8">
                <h1>Manuel Meraz</h1>
                <p>Software Engineer</p>
                <p>I'm a software engineer with a passion for building products that help people live better lives.</p>
                <p>I'm currently working at <a href="https://www.google.com">Google</a> as a software engineer.</p>
                <p>I'm currently living in <a href="https://www.google.com">San Francisco, CA</a>.</p>
                <p>I'm currently learning <a href="https://www.google.com">React</a>.</p>
            </div>
        </div>
    )
}