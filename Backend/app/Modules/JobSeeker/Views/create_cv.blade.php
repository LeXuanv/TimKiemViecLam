<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CV Ứng Viên</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&display=swap');

        body {
            font-family: 'Inter', sans-serif;
            background-color: #F3F4F6;
        }
    </style>
</head>
<body class="bg-gray-100 p-0">
<div class="grid grid-cols-10 mb-6">
    <div class="col-span-2"></div>
    <div class="mt-8 col-span-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div class="bg-black h-2 w-full"></div>

        <div class="p-6">
            <div class="flex items-center mb-6 border-b-2 border-gray-200 pb-4">
                <div class="mr-6">
                    <img src="{{ url($jobSeeker->getInfo()['logo']) }}" alt="{{ $jobSeeker->name }}"
                         class="w-32 h-32 rounded-full object-cover border-4 border-orange-500">
                </div>
                <div>
                    <h1 class="text-3xl font-bold text-gray-800 mb-1">{{ $jobSeeker->name ?? 'Chưa có thông tin'}}</h1>
                    <h2 class="text-xl text-orange-600 font-semibold uppercase"> {{ $jobSeeker->industry_job ?? 'Chưa có thông tin'}}</h2>
                </div>
            </div>

            <div class="grid grid-cols-3 gap-6">
                <div class="col-span-2 pr-6 border-r border-gray-200">
                    <section class="mb-6">
                        <h3 class="text-lg font-semibold text-orange-600 border-b-2 border-orange-200 pb-2 mb-3">MỤC
                            TIÊU NGHỀ NGHIỆP</h3>
                        <p class="text-gray-700">
                            {{ $jobSeeker->description ?? 'Chưa có thông tin' }}
                        </p>
                    </section>

                    <section class="mb-6">
                        <h3 class="text-lg font-semibold text-orange-600 border-b-2 border-orange-200 pb-2 mb-3">HỌC
                            VẤN</h3>
                        <div>
                            @foreach($educationDetails as $item)
                                <h4 class="font-medium text-gray-800">{{ $item->university }}</h4>
                                <p class="text-gray-600">Bằng {{ $item->degree }} | 11/2020 - 12/2024</p>
                                <p class="text-gray-600 mb-1">Chuyên ngành: {{ $item->major }}</p>
                            @endforeach
                        </div>
                    </section>

                    <section class="mb-6">
                        <h3 class="text-lg font-semibold text-orange-600 border-b-2 border-orange-200 pb-2 mb-3">KINH
                            NGHIỆM LÀM VIỆC</h3>
                        <div class="mb-4 text-gray-600">
                            {!! nl2br($jobSeeker->experience) !!}
                        </div>
                    </section>

                    {{--                    <section>--}}
                    {{--                        <h3 class="text-lg font-semibold text-orange-600 border-b-2 border-orange-200 pb-2 mb-3">PROJECTS</h3>--}}
                    {{--                        <div class="mb-4">--}}
                    {{--                            <h4 class="font-medium text-gray-800">ALN SYSTEM</h4>--}}
                    {{--                            <p class="text-gray-600">08/2023 - 02/2024 | Team Size: 06</p>--}}
                    {{--                            <p class="text-gray-700 mb-2">A web-based management system designed for law firms, focusing on intellectual property (IP) management, including patents, trademarks, and industrial designs.</p>--}}
                    {{--                            <p class="text-gray-600 mb-2">Technologies: PHP, Laravel, Bootstrap, jQuery, MySQL</p>--}}
                    {{--                            <ul class="list-disc list-inside text-gray-700 pl-2">--}}
                    {{--                                <li>Developed the Deadline module</li>--}}
                    {{--                                <li>Developed the Work History module</li>--}}
                    {{--                            </ul>--}}
                    {{--                        </div>--}}
                    {{--                        <div>--}}
                    {{--                            <h4 class="font-medium text-gray-800">CARMAP - https://carmap.com.vn</h4>--}}
                    {{--                            <p class="text-gray-600">02/2024 - 09/2024 | Team Size: 02</p>--}}
                    {{--                            <p class="text-gray-700 mb-2">A car garage management system featuring key functionalities such as car wash service tracking, retail management for spare parts, appointment scheduling, and license plate recognition using cameras.</p>--}}
                    {{--                            <p class="text-gray-600 mb-2">Technologies: PHP, Laravel, Bootstrap, jQuery, MySQL</p>--}}
                    {{--                            <ul class="list-disc list-inside text-gray-700 pl-2">--}}
                    {{--                                <li>Developed the Scheduling module</li>--}}
                    {{--                                <li>Developed the Retail module</li>--}}
                    {{--                                <li>Developed the AI Camera module</li>--}}
                    {{--                            </ul>--}}
                    {{--                        </div>--}}
                    {{--                    </section>--}}
                </div>

                <div class="col-span-1 bg-orange-50 p-4 rounded-lg">
                    <section class="mb-4">
                        <h3 class="text-lg font-semibold text-orange-600 border-b-2 border-orange-200 pb-2 mb-3">THÔNG
                            TIN LIÊN HỆ</h3>
                        <div class="space-y-1">
                            <p class="text-gray-700 flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-orange-600" fill="none"
                                     viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                                </svg>
                                {{ $jobSeeker->phone_number }}
                            </p>
                            <p class="text-gray-700 flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-orange-600" fill="none"
                                     viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                                </svg>
                                {{ $jobSeeker->email }}
                            </p>
                            {{--                            <p class="text-gray-700 flex items-center">--}}
                            {{--                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">--}}
                            {{--                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />--}}
                            {{--                                </svg>--}}
                            {{--                                linkedin.com/in/tvphuc--}}
                            {{--                            </p>--}}
                            <p class="text-gray-700 flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-orange-600" fill="none"
                                     viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                                </svg>
                                {{ $jobSeeker->address }}
                            </p>
                        </div>
                    </section>

                    <section class="mb-4">
                        <h3 class="text-lg font-semibold text-orange-600 border-b-2 border-orange-200 pb-2 mb-3">KĨ
                            NĂNG</h3>
                        <div class="mb-3">

                            @foreach($typeSkills as $typeSkill)
                                @if(count($typeSkill->getSkillByJobSeekerId($jobSeeker->id)))
                                    <h4 class="font-bold text-gray-800 uppercase underline">{{ $typeSkill->name }}</h4>
                                    <ul class="text-gray-600">
                                        @foreach($typeSkill->getSkillByJobSeekerId($jobSeeker->id) as $skill)
                                            <li>{{ $skill->name }}</li>
                                        @endforeach
                                    </ul>
                                @endif
                            @endforeach
                        </div>
                    </section>
                </div>
            </div>
        </div>

        <div class="bg-black h-2 w-full"></div>
    </div>
    <div class="my-8 col-span-2 flex justify-center h-10">
        <a class="w-auto px-2 h-10 bg-orange-400 rounded-md shadow-lg cursor-pointer flex items-center hover:bg-orange-500"
           href="{{ route('download-cv-by-id', $jobSeeker->id) }}">
            <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                 width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M4 15v2a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-2m-8 1V4m0 12-4-4m4 4 4-4"/>
            </svg>
            <p class="text-white font-bold">Tải CV PDF</p>
        </a>
        <div class="ml-2 w-auto px-2 h-10 bg-blue-400 rounded-md shadow-lg cursor-pointer flex items-center hover:bg-blue-500">
            <a href="{{ route('download-cv-by-id', $jobSeeker->id) }}">
                <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                     width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="square" stroke-linejoin="round" stroke-width="2"
                          d="M7 19H5a1 1 0 0 1-1-1v-1a3 3 0 0 1 3-3h1m4-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm7.441 1.559a1.907 1.907 0 0 1 0 2.698l-6.069 6.069L10 19l.674-3.372 6.07-6.07a1.907 1.907 0 0 1 2.697 0Z"/>
                </svg>
            </a>
            <a class="text-white font-bold ml-2" href="http://localhost:3000/profile">Sửa hồ sơ</a>
        </div>
        
    </div>
</div>
</body>
</html>
