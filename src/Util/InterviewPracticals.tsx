import { useEffect } from "react";

export function InterviewManager() {
    // START Program1no
    const str = "the simplestThings in LIFE are alwaysThe best";
    // const strArr = str.split(" ");
    // let afterReplace = strArr.map((item) => {
    //   return item.trim().replace(/([A-Z])/, ` $1`);
    // });
    // afterReplace = afterReplace.map((item) =>  item.trim().toLowerCase());
    // const newStr = afterReplace.join(" ");
    // const newArray = newStr.split(" ");
    // let afterReplaceRes = newArray.map((item) => item[0].toUpperCase() + item.slice(1));
    // console.log(": Before", str);

    const resolve = str.split(" ")
        .map((item) => {
            return item.trim().replace(/([A-Z])/, ` $1`);
        })
        .map((item) => item.trim().toLowerCase())
        .join(" ")
        .split(" ")
        .map((item) => item[0].toUpperCase() + item.slice(1))
        .join(" ")

    // console.log('resolve', resolve);  

    // Queston 2

    const countTheLetters = (str: any) => {
        let letterCount: any = {}, count = 0;
        for (let i = 0; i < str.length; i++) {
            if (!letterCount[str[i]]) {
                letterCount[str[i]] = [];
            }
            letterCount[str[i]].push(i);
        }

        return letterCount;
    }
    // const res = countTheLetters("rohitashRohitash".toLocaleLowerCase());
    // console.log("Count=", res);

    // Queston 3
    const paddingNum = (arr: any) => {
        return arr.map((num: any) => {
            return +num < 10 ? `0${num}` : num
        })
    }

    let nums = ['2', '4', '25', '10', '3'];

    // console.log(paddingNum(nums));



    // function cropTweeterSentence(str: any){

    //   console.log('140-th character is ' + str.charAt(139));

    //   if (str.length > 140) {

    //     if (str.charAt(140) === " ") {

    //       str = str.substring(0, 140);
    //     } else {
    //       // start the below for loop from 139-th position, because, I already know that the 140-th position is not as single space, so
    //       // there's no further point to search again at 140-th position for a single space
    //       for (let i = 139; i >=0; i--) {
    //         if (str[i] === " ") {
    //           // In below I am doing (i + 1), because substring() will not catch the end-position. But I want to finally return including the ending space
    //           str = str.substring(0, i + 1)

    //           // After finding and returning the sentence just once, I need to break the function permenently
    //           break;
    //         }
    //       }
    //     }
    //   }
    //   return str;
    // }

    // console.log(cropTweeterSentence('Foooo '));
    // console.log('\n');

    // console.log(cropTweeterSentence('Foooo kdnfs asfdnks sdfn asfnas fasdfk asflk saf sfm asfd mlmaf asf saf  asfsafd dfdsf fdsf dsf sdf fffffffffffffffffffffffffff ffffff hhhXY f '));
    // console.log('\n');

    // console.log(cropTweeterSentence('Foooo kdnfs asfdnks sdfn asfnas fasdfk asflk saf sfm asfd mlmaf asf saf  asfsafd dfdsf fdsf dsf sdf fffffffffffffffffffffffffff ffffff hhh XYf '));
    // console.log('\n');

    // console.log(cropTweeterSentence('Foooo kdnfs asfdnks sdfn asfnas fasdfk asflk saf sfm asfd mlmaf asf saf  asfsafd dfdsf fdsf dsf sdf fffffffffffffffffffffffffff ffffff hhhXYf '));
    // console.log('\n');


    var persons = [1, 2, 3, 4, 5];
    var uniqueTags = persons.reduce((acc: any, personObj: any) => {
        acc += personObj;
        return acc;
    }, 0);
    // console.log(uniqueTags);

    // ENDS
    const name = "asdasd";

    // let obj_1 = {
    //     rohit: 'test singh',
    //     last: {
    //       name: "asim",
    //       sayLater: function () {
    //         const name = "asimsss";
    //           console.log(obj_1.rohit);
    //           // console.log(`${this.sayLater}`);
    //           // console.log(`${this.name}`);
    //       }
    //     }
    // };
    // obj_1.last.sayLater();
    // const profile_2 = {

    //   name: 'profile_2-tech',

    //   getName: () => {
    //     // console.log(this);
    //     console.log(profile_2.name);
    //   }
    // }
    // profile_2.getName();

    const roles = {
        globalRoles: [
            {
                id: 1,
                shop_id: null,
                global: true,
                name: "owner"
            },
            {
                id: 2,
                shop_id: null,
                global: true,
                name: "admin"
            },
            {
                id: 3,
                shop_id: null,
                global: true,
                name: "super admin"
            }
        ],
        customRoles: [
            {
                id: 4,
                shop_id: 1,
                global: false,
                name: "custom user 1"
            },
            {
                id: 5,
                shop_id: 1,
                global: false,
                name: "custom user 2"
            }
        ]
    };

    const requiredData = Object.values(roles);
    // const res = requiredData.filter(role => role?.id === 2);

    // console.log(res);


    // // global scope
    // var e = 10;
    // function sum(a:any){
    //   return function(b: any){
    //     return function(c: any){
    //       // outer functions scope
    //       return function(d: any){
    //         // local scope
    //         return a + b + c + d + e;
    //       }
    //     }
    //   }
    // }

    // console.log(sum(1)(2)(3)(4)); // log 20

    useEffect(
        () => {
            // console.log('im app use effect');
        }, []
    );

    const [value, setValue] = useState('');

    const searchHandler = () => {
        // console.log('Calling searchHandler');
        // Add your search logic here
    };

    const debounce = function (callback: any, delay: any) {
        let timer: any;
        return function () {
            clearTimeout(timer);
            timer = setTimeout(() => {
                callback();
            }, delay);
        };
    };

    const debouncedHandler = debounce(searchHandler, 4000);

    const handleInputChange = (event: any) => {
        const { value: newValue } = event.target;
        setValue(newValue);
        debouncedHandler();
    };

}

function useState(arg0: string): [any, any] {
    throw new Error("Function not implemented.");
}
