# DESIGN AND LOGIC IMPLEMENTATION GUIDE

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

-The <code>parent div</code> is appended an only-child <code>Header tag</code> with utility class composition \n 
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

