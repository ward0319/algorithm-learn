function solution(numbers) {
    let answer = 0 
    originList = [0,1,2,3,4,5,6,7,8,9]
    lists = numbers.sort();
    answerLength = originList.filter(x => !lists.includes(x))
    
    const reducer = (accumulator, curr) => accumulator + curr;
    answer = answerLength.reduce(reducer);
    console.log(answer)
    return answer;
}