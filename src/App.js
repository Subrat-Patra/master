import logo from './logo.svg';
import globe_white from'./globe_white.svg';
import './App.css';
import iso from './iso.webp';
import Carousel from './Carousel.webp'


function App() {
  return (
<div>
<div class="bg">


<nav className="h-[104px]">
      <div className="z-50 w-full text-white">
        <div className="container mx-auto px-4 z-50 flex items-center justify-between py-5">
          <div className="w-auto">
            <div class="flex flex-wrap items-center">
              <div className='w-auto mr-14'>
              <img src={logo} alt="Logo" width="200" height="200" />
              </div>
            
            </div>
         
          </div>
<div className="w-auto hidden xl:block">
  <ul className="flex items-center mr-10">
    <li className="group font-heading mr-7 text-lg">
   <div className='flex flex-row border-gray-200 p-2 border-2 rounded'>
   <svg className='mt-1.5 mr-2'  xmlns="http://www.w3.org/2000/svg" height="1em" fill='white' viewBox="0 0 384 512"><path d="M173.8 5.5c11-7.3 25.4-7.3 36.4 0L228 17.2c6 3.9 13 5.8 20.1 5.4l21.3-1.3c13.2-.8 25.6 6.4 31.5 18.2l9.6 19.1c3.2 6.4 8.4 11.5 14.7 14.7L344.5 83c11.8 5.9 19 18.3 18.2 31.5l-1.3 21.3c-.4 7.1 1.5 14.2 5.4 20.1l11.8 17.8c7.3 11 7.3 25.4 0 36.4L366.8 228c-3.9 6-5.8 13-5.4 20.1l1.3 21.3c.8 13.2-6.4 25.6-18.2 31.5l-19.1 9.6c-6.4 3.2-11.5 8.4-14.7 14.7L301 344.5c-5.9 11.8-18.3 19-31.5 18.2l-21.3-1.3c-7.1-.4-14.2 1.5-20.1 5.4l-17.8 11.8c-11 7.3-25.4 7.3-36.4 0L156 366.8c-6-3.9-13-5.8-20.1-5.4l-21.3 1.3c-13.2 .8-25.6-6.4-31.5-18.2l-9.6-19.1c-3.2-6.4-8.4-11.5-14.7-14.7L39.5 301c-11.8-5.9-19-18.3-18.2-31.5l1.3-21.3c.4-7.1-1.5-14.2-5.4-20.1L5.5 210.2c-7.3-11-7.3-25.4 0-36.4L17.2 156c3.9-6 5.8-13 5.4-20.1l-1.3-21.3c-.8-13.2 6.4-25.6 18.2-31.5l19.1-9.6C65 70.2 70.2 65 73.4 58.6L83 39.5c5.9-11.8 18.3-19 31.5-18.2l21.3 1.3c7.1 .4 14.2-1.5 20.1-5.4L173.8 5.5zM272 192a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM1.3 441.8L44.4 339.3c.2 .1 .3 .2 .4 .4l9.6 19.1c11.7 23.2 36 37.3 62 35.8l21.3-1.3c.2 0 .5 0 .7 .2l17.8 11.8c5.1 3.3 10.5 5.9 16.1 7.7l-37.6 89.3c-2.3 5.5-7.4 9.2-13.3 9.7s-11.6-2.2-14.8-7.2L74.4 455.5l-56.1 8.3c-5.7 .8-11.4-1.5-15-6s-4.3-10.7-2.1-16zm248 60.4L211.7 413c5.6-1.8 11-4.3 16.1-7.7l17.8-11.8c.2-.1 .4-.2 .7-.2l21.3 1.3c26 1.5 50.3-12.6 62-35.8l9.6-19.1c.1-.2 .2-.3 .4-.4l43.2 102.5c2.2 5.3 1.4 11.4-2.1 16s-9.3 6.9-15 6l-56.1-8.3-32.2 49.2c-3.2 5-8.9 7.7-14.8 7.2s-11-4.3-13.3-9.7z"/></svg>
   <button className=''> Facturation électronique 2024</button>
   </div>
      

    </li>
    <li className='group hover-trigger font-heading mr-9 text-lg z-5'>
<div className='group-hover:underline group-hover:underline-offset-[3px] group-hover:decoration-2 cursor-pointer'>
Expertise
</div>
<div className='hover-target submenu absolute group-hover:transition duration-300 shadow-xl'>

</div>
    </li>
    <li className='group hover-trigger font-heading mr-9 text-lg z-50 '>
<div className='group-hover:underline group-hover:underline-offset-[3px] group-hover:decoration-2 cursor-pointer'>
Solutions
</div>

    </li>
    <li className='group hover-trigger font-heading mr-9 text-lg z-50 '>
<div className='group-hover:underline group-hover:underline-offset-[3px] group-hover:decoration-2 cursor-pointer'>
Services
</div>

    </li>
    <li className='group hover-trigger font-heading mr-9 text-lg z-50 '>
<div className='group-hover:underline group-hover:underline-offset-[3px] group-hover:decoration-2 cursor-pointer'>
Blog
</div>

    </li>

  </ul>

</div>


<div className='w-auto'>
  <div className='flex flex-wrap items-center'>
    <div className='w-auto hidden 2xl:block'>
<a className='hover:underline hover:underline-offset-[3px] hover:decoration-2 font-heading block py-3.5 px-5 uppercase text-xs tracking-px font-bold transition rounded-10'>  Connexion TMA</a>
    </div>
    <div className='w-auto hidden xl:block'>
      <a className='btn-demo font-heading block py-3.5 px-5 uppercase text-xs tracking-px font-bold bg-white bg-opacity-20 hover:bg-opacity-10 transition rounded-10'>
      Obtenir une démo
      </a>

    </div>
    <div className='hidden xl:block ml-5'>

   <div className='flex flex-row'>

<div>
  FR
</div>
<div className='mt-2'>
<svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
  </svg>
</div>
   </div>
 
  
    </div>

  </div>

</div>
        </div>

      </div>

    </nav>

    
         
         


<div className=' flex flex-row mt-12'>
  <div className=' w-[70%]'> <div className='w-auto ml-4'>
              <img src={iso} alt="Logo" width='150' height='150' className='w-40 transform-white '  />

<div className='class="mb-6 font-heading flex xl:block justify-center '>

</div>
            <h1 className='text-center xl:text-left font-heading text-white text-5xl md:text-7xl xl:text-10xl 2xl:text-12xl font-medium mb-6 '>La dématérialisation<br></br>au service de votre business</h1>
            <h2 className='text-center xl:text-left font-medium text-xl 2x:text-2xl text-white mb-10 aos-init aos-animate'>
            Esalink vous accompagne dans la digitalisation de vos flux B2B
            </h2>
<div className='flex flex-col justify-center items-center xl:items-start xl:justify-start md:flex-row gap-8 aos-init aos-animate'>
  <a className='block w-fit font-heading text-white bg-white py-2 px-6 rounded-lg cursor-pointer text-lg 2xl:text-xl bg-opacity-30 hover:bg-opacity-20 transition '>
  Trouver votre solution EDI
  </a>
  <a className='block w-fit font-heading text-white bg-white py-2 px-6 rounded-lg cursor-pointer text-lg 2xl:text-xl bg-opacity-30 hover:bg-opacity-20 transition '>
  Passer à la facturation électronique
  </a>

</div>

              </div></div>
  <div className=' w-[40%]  '>  <div className='w-auto'>
              <img src={globe_white} alt="Logo"   />
              </div></div>
</div>

     
    </div>
    <div className='bg-teal-50 h-auto '>
    <div className='   h-auto ml-56 mr-56  pt-4 pb-24 '>

<div>
<p className='font-medium pt-2'>
TRELLO 101
</p>
<h2 className='text-center xl:text-left font-medium text-4xl 2x:text-2xl  mb-8'>
A productivity powerhouse
</h2>
<p className='text-center xl:text-left text-xl 2x:text-2xl w-[576px]'>
Simple, flexible, and powerful. All it takes are boards, lists, and cards to get a clear view of who’s doing what and what needs to get done. Learn more in our <a className='text-blue-500 underline'>guide for getting started</a>
</p>
</div>
<div className='flex flex-row mt-6'>

<div>
<div class="max-w-sm rounded overflow-hidden  mr-8 h-44 bg-white shadow-lg">
<div class="px-6 py-4">
<div class="font-bold text-md mb-2 ">Boards</div>
<p class="text-gray-700 text-base">
Trello boards keep tasks organized and work moving forward. In a glance, see everything from “things to do” to “aww yeah, we did it!"
</p>
</div>

</div>


<div class="px-6 py-4 max-w-sm">
<div class="font-bold text-md mb-2 ">Lists</div>
<p class="text-gray-700 text-base">
The different stages of a task. Start as simple as To Do, Doing or Done—or build a workflow custom fit to your team’s needs. There’s no wrong way to Trello.
</p>


</div>


<div class="px-6 py-4 max-w-sm">
<div class="font-bold text-md mb-2 ">Boards</div>
<p class="text-gray-700 text-base">
Cards represent tasks and ideas and hold all the information to get the job done. As you make progress, move cards across lists to show their status.
</p>


</div>
</div>





<div className='h-auto w-auto'>
<img src={Carousel} alt="Logo" width='900' height='1000' className=' '  />
</div>
</div>
</div>
    </div>
    
    <div>
     
    </div>
    <footer
  class="bg-neutral-100 text-center text-neutral-600 dark:bg-neutral-600 dark:text-neutral-200 lg:text-left">
 


  <div class="mx-6 py-10 text-center md:text-left">
    <div class="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-6">
     
      <div class="">
        <h6
          class="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
          
          Monday.com
        </h6>
        <p class="mb-2">
          <a href="#!" class="text-neutral-600 dark:text-neutral-200"
            >Pricing</a >
        </p>
        <p class="mb-2">
          <a href="#!" class="text-neutral-600 dark:text-neutral-200"
            >Contact us </a >
        </p>
        <p className='mb-2'>
        <a href="#!" class="text-neutral-600 dark:text-neutral-200"
            >Templates </a >
        
        </p>
        <p className='mb-2'>
        <a href="#!" class="text-neutral-600 dark:text-neutral-200"
            >SMB </a >
        
        </p>
        <p className='mb-2'>
        <a href="#!" class="text-neutral-600 dark:text-neutral-200"
            >Enterprise </a >
        
        </p>
        <p className='mb-2'>
        <a href="#!" class="text-neutral-600 dark:text-neutral-200"
            >Nonprofits </a >
        
        </p>
        <p className='mb-2'>
        <a href="#!" class="text-neutral-600 dark:text-neutral-200"
            >App marketplace </a >
        
        </p>
        <p className='mb-2'>
        <a href="#!" class="text-neutral-600 dark:text-neutral-200"
            >24/7 support </a >
        
        </p>
      </div>
    
      <div class="">
        <h6
          class="mb-4 flex justify-center font-semibold uppercase md:justify-start">
          Features
        </h6>
        <p class="mb-4">
          <a href="#!" class="text-neutral-600 dark:text-neutral-200"
            >Docs</a >
        </p>
        <p class="mb-4">
          <a href="#!" class="text-neutral-600 dark:text-neutral-200"
            >Integrations</a
          >
        </p>
        <p class="mb-4">
          <a href="#!" class="text-neutral-600 dark:text-neutral-200"
            >Automations</a>
        </p>
        <p>
          <a href="#!" class="text-neutral-600 dark:text-neutral-200"
            >Files</a >
        </p>
        <p>
          <a href="#!" class="text-neutral-600 dark:text-neutral-200"
            >Dashboards</a >
        </p>
        <p>
          <a href="#!" class="text-neutral-600 dark:text-neutral-200"
            >Kanban</a >
        </p>
        <p>
          <a href="#!" class="text-neutral-600 dark:text-neutral-200"
            >Gantt</a >
        </p>
      </div>
      <div class="">
        <h6
          class="mb-4 flex justify-center font-semibold uppercase md:justify-start">
          monday products
        </h6>
        <p class="mb-4">
          <a href="#!" class="text-neutral-600 dark:text-neutral-200"
            >monday work management</a
          >
        </p>
        <p class="mb-4">
          <a href="#!" class="text-neutral-600 dark:text-neutral-200"
            >monday sales CRM</a>
        </p>
        <p class="mb-4">
          <a href="#!" class="text-neutral-600 dark:text-neutral-200"
            >monday dev</a>
        </p>
        <p>
          <a href="#!" class="text-neutral-600 dark:text-neutral-200"
            >More by monday.com</a
          >
        </p>
      </div>
      <div class="">
        <h6
          class="mb-4 flex justify-center font-semibold uppercase md:justify-start">
        Use cases
        </h6>
        <p class="mb-4">
          <a href="#!" class="text-neutral-600 dark:text-neutral-200"
            >Marketing</a>
        </p>
        <p class="mb-4">
          <a href="#!" class="text-neutral-600 dark:text-neutral-200"
            >Project management</a>
        </p>
        <p class="mb-4">
          <a href="#!" class="text-neutral-600 dark:text-neutral-200"
            >Sales</a >
        </p>
        <p>
          <a href="#!" class="text-neutral-600 dark:text-neutral-200"
            >Developers</a
          >
        </p>
        <p>
          <a href="#!" class="text-neutral-600 dark:text-neutral-200"
            >HR</a
          >
        </p>
        <p>
          <a href="#!" class="text-neutral-600 dark:text-neutral-200"
            >IT</a
          >
        </p>
      </div>
      <div class="">
        <h6
          class="mb-4 flex justify-center font-semibold uppercase md:justify-start">
          Company
        </h6>
        <p class="mb-4">
          <a href="#!" class="text-neutral-600 dark:text-neutral-200"
            >About us</a>
        </p>
        <p class="mb-4">
          <a href="#!" class="text-neutral-600 dark:text-neutral-200"
            >Careers</a
          >
        </p>
        <p class="mb-4">
          <a href="#!" class="text-neutral-600 dark:text-neutral-200"
            >Investor relations</a
          >
        </p>
        <p>
          <a href="#!" class="text-neutral-600 dark:text-neutral-200"
            >Become a Partner</a
          >
        </p>
      </div>
      
      <div>
        <h6
          class="mb-4 flex justify-center font-semibold uppercase md:justify-start">
        Resources
        </h6>
        <p class="mb-4 flex items-center justify-center md:justify-start">
        
         Blog
        </p>
        <p class="mb-4 flex items-center justify-center md:justify-start">
         
          Whats new
        </p>
        <p class="mb-4 flex items-center justify-center md:justify-start">
      
          Monday space
        </p>
      
      </div>
    </div>
  </div>

  
  <div class="bg-neutral-200 p-6 text-center dark:bg-neutral-700">
    <span>© 2023 Copyright:</span>
    <a
      class="font-semibold text-neutral-600 dark:text-neutral-400"
      href="https://tailwind-elements.com/"
      >Subrat Patra</a >
  </div>
</footer>

</div>


  



  
  );
}

export default App;
