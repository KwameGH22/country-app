# DESIGN IMPLEMENTATION GUIDE

## LANDING PAGE

### STEP 01
- Within the return block of the App.jsx component/file, a parent div is appended with the following
- utility class composition:


| Utility Class | Description |
|---------------|-------------|
|dark:bg-[#202C36]| This is a variant for dark mode in Tailwind CSS. It sets the background color of the element to #202C36 when the dark mode is active. The value #202C36 is a hexadecimal color code representing a dark shade.           |
|w-full          |Sets the width of the element to be 100% of its container. This makes the element span the entire width of its parent.              |
|min-h-screen         |Sets the minimum height of the element to be at least the full height of the viewport (screen). This ensures that the element takes up at least the entire height of the screen. It's often used to create full-height layouts or sections.              |

```js
    <div className='w-full min-h-screen dark:bg-[#202C36]'>

    </div> //Step 01
```

### STEP 02

- The <code>parent div</code> is appended an only-child <code>Header tag</code> with utility class composition \n 
as follows:


| Utility Class | Description |
|---------------|-------------|
|flex            |              |
|justify-around          |              |
|w-full          |              |
|bg-[#FFFFFF]          |              |
|font-Nunito          |              |
| text-[#111517]         |              |
| py-6         |              |
|     shadow-lg     |              |
|    dark:text-[#ffffff]      |              |
|  dark:bg-[#2B3844]        |              |

```js
    <div className='w-full min-h-screen dark:bg-[#202C36]'>
        <header className='flex justify-around w-full bg-[#FFFFFF] font-Nunito text-[#111517] py-6 shadow-lg dark:bg-[#2B3844] dark:text-[#FFFFFF]'>
        
        </header>  //Step 02

    </div> //Step 01
```

### STEP 03
- Inside the <code>Header tag</code> append two sibling <code>divs</code>:

```js
    <div className='w-full min-h-screen dark:bg-[#202C36]'>
        <header className='flex justify-around w-full bg-[#FFFFFF] font-Nunito text-[#111517] py-6 shadow-lg dark:bg-[#2B3844] dark:text-[#FFFFFF]'>

            <div></div>  //step 03
            <div></div>  //step 03
        
        </header>  //Step 02

    </div> //Step 01
```

### STEP 04
- Inside the first div, append an <code>h1 tag</code> with the following utility class composition:

| Utility Class | Description |
|---------------|-------------|
|text-2xl          |              |
|mobile:text-lg          |              |
|font-extrabold         |              |

- and the content <code>Where in the World?</code>

```js
    <div className='w-full min-h-screen dark:bg-[#202C36]'>
        <header className='flex justify-around w-full bg-[#FFFFFF] font-Nunito text-[#111517] py-6 shadow-lg dark:bg-[#2B3844] dark:text-[#FFFFFF]'>

            <div>
                <h1 className='text-2xl mobile:text-lg font-extrabold'></h1> //step 04
            </div>  //step 03
            <div></div>  //step 03
        
        </header>  //Step 02

    </div> //Step 01
```
### STEP 05
- Inside the second div append the tailwind class composition:

| Utility Class | Description |
|---------------|-------------|
|flex          |              |
|item-center          |              |
|gap-2         |              |
|text-center        |              |

- This second div is supposed to house a theme icon that is either a Moon for dark theme or a Sun for light theme together with a text description that is DARK or LIGHT.
- However these have to be rendered conditionally and in a dynamic logic.
- So inside the second div lets append the react Moon icon and a span tag that will contain the theme description text: DARK

```js
    <div className='w-full min-h-screen dark:bg-[#202C36]'>
        <header className='flex justify-around w-full bg-[#FFFFFF] font-Nunito text-[#111517] py-6 shadow-lg dark:bg-[#2B3844] dark:text-[#FFFFFF]'>

            <div>
                <h1 className='text-2xl mobile:text-lg font-extrabold'></h1> //step 04
            </div>  //step 03
            <div>
                <Moon/><span>DARK</span>  //step 05
            </div>  //step 03
        
        </header>  //Step 02

    </div> //Step 01
```
