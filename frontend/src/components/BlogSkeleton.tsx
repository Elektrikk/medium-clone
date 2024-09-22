export const BlogSkeleton = () => {
    return (
        <div role="status" className="animate-pulse w-screen max-w-screen-md">


            <div className="p-4 border-b border-slate-300 pb-4 w-screen max-w-screen-md cursor-pointer">
                <div className="flex">
                    <div className="flex justify-center flex-col">
                        <div className="h-2.5 bg-gray-200 rounded-full  w-48 mb-4"></div>
                    </div>

                    <div className="font-extralight p-2">
                        <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
                        <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
                    </div>
                    <div className="flex justify-center flex-col text-xxs font-extralight text-slate-400">
                        &#9679;
                    </div>
                    <div className="font-thin p-2 text-slate-600">
                        <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
                    </div>


                </div>
                <div className="text-2xl font-semibold pt-2">
                    <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
                </div>
                <div className="text-l font-light">
                    <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
                </div>
                <div className="text-slate-400 text-sm pt-3">
                    <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
                </div>

            </div>

            <span className="sr-only">Loading...</span>
        </div>


    )
}