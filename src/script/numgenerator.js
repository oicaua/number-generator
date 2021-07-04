// Here the numbers are generated
function generateNum(quant, nmin, nmax, repeat) {
    let i = 0
    let result = []

    if ((nmax - nmin) < quant) {
        return `Impossível realizar a operação: você solicitou ${quant} números, mas só é possível gerar ${nmax - nmin} (${nmax} - ${nmin})`
    } else if (quant > 5000) {
        return `Caramba, quantos números! Você realmente precisa de mais de 5000 números? Tente sortear menos números`
    } else if (repeat == "true") {
        while (result.length < quant) {
            nmin = Math.ceil(nmin);
            nmax = Math.floor(nmax);
            result.push(Math.floor(Math.floor(Math.random() * (nmax - nmin)) + nmin))
            i += 1
        }
        let resultAsc = result.sort(function (a, b) {
            return a - b
        })
        return resultAsc
    } else {
        while (result.lenght != quant) {
            // Generate the first numbers
            while (result.length < quant) {
                nmin = Math.ceil(nmin);
                nmax = Math.floor(nmax);
                result.push(Math.floor(Math.floor(Math.random() * (nmax - nmin)) + nmin))
                i += 1
            }

            // Verify if there are duplicated numbers and sort them correctly
            const isDuplicate = (nums) => {
                let numsAsc = nums.sort(function (a, b) {
                    return a - b;
                });
                let i = 0
                let lengthOfNums = numsAsc.length
                while (i <= lengthOfNums) {
                    if (numsAsc[i] == numsAsc[i + 1] && numsAsc[i + 1] != undefined) {
                        delete numsAsc[i]
                    }
                    i += 1
                }
                const arrayFiltered = numsAsc.filter(el => {
                    return el != null && el != '';
                });
                return arrayFiltered
            }
            let duplicate = isDuplicate(result) // Call the function | Array without duplicated numbers

            // If there isn't enough numbers (based upon 'quant') it generates more numbers and sort them correctly
            while (duplicate.length < quant) {
                while (duplicate.length < quant) {
                    duplicate.push(Math.floor(Math.floor(Math.random() * (nmax - nmin)) + nmin))
                }
                duplicate = isDuplicate(duplicate)
            }
            let resultAsc = duplicate.sort(function(a,b) {
                return a - b
            })
            return resultAsc
        }

    }
}

// Get params from input
const form = document.getElementById('theForm')
const inputQuant = document.getElementById('quant')
const inputNMin = document.getElementById('nmin')
const inputNMax = document.getElementById('nmax')
function valueOfRepeat() {
    theValue = document.getElementById('repeat').value
    if (theValue == "false") {
        document.getElementById('repeat').value = "true"
        document.getElementById('repeat').className = "btn btn-success confirmRepeat"
    } if (theValue == "true") {
        document.getElementById('repeat').value = "false"
        document.getElementById('repeat').className = "btn btn-secondary confirmRepeat"
    }
}
const inputRepeat = document.getElementById('repeat')

// Generate Numbers and send to HTML 
form.addEventListener('submit', function (e) {
    const arrays = generateNum(inputQuant.value, inputNMin.value, inputNMax.value, inputRepeat.value)
    const typeOfArrays = typeof arrays
    let finalArray = []
    let i = 0
    if (typeOfArrays != "string") {
        while (i <= arrays.length) {
            if (arrays[i] != undefined) {
                finalArray.push(' ' + arrays[i])
            }
            i += 1
        }
        const display = document.getElementById('displayNums')
        display.innerHTML = finalArray
    } else {
        const display = document.getElementById('displayNums')
        display.innerHTML = arrays
    }

    e.preventDefault();
    return finalArray
})
