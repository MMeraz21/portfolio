"use client"

export function HomePage() {
    return (
        <div className="flex flex-row items-start pl-8 pt-8 bg-[#fbfbf3] h-[calc(100vh-72px)]"> {/* Changed min-h-screen to h-[calc(100vh-72px)] */}
            <div className="w-[450px] h-[700px] bg-gray-200 border-4 border-black rounded-lg flex items-center justify-center">
                {/* This is a placeholder div that looks like an image. Replace with actual Image component when ready */}
                <span className="text-gray-600">300x300 Image</span>
            </div>
            <div className="ml-8 mt-8">
                <h1>Hi! I&apos;m Manuel Meraz</h1>
                <p>Software Engineer</p>
            </div>
        </div>
    )
}