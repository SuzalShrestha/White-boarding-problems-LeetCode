/**
https://leetcode.com/problems/minimum-number-of-vertices-to-reach-all-nodes/
In a town, there are n people labeled from 1 to n. 
There is a rumor that one of these people is secretly the town judge.
If the town judge exists, then:
    The town judge trusts nobody.
    Everybody (except for the town judge) trusts the town judge.
    There is exactly one person that satisfies properties 1 and 2.
You are given an array trust where trust[i] = [ai, bi] representing 
that the person labeled ai trusts the person labeled bi. 
If a trust relationship does not exist in trust array, then such a trust 
relationship does not exist.
Return the label of the town judge if the town judge exists and can be identified, or return -1 otherwise.
Example 1:

Input: n = 2, trust = [[1,2]]
Output: 2

Example 2:
Input: n = 3, trust = [[1,3],[2,3]]
Output: 3

Example 3:
Input: n = 3, trust = [[1,3],[2,3],[3,1]]
Output: -1

Constraints:
    1 <= n <= 1000
    0 <= trust.length <= 104
    trust[i].length == 2
    All the pairs of trust are unique.
    ai != bi
    1 <= ai, bi <= n
**/
let findJudge = function (n, trust) {
  if (n === 1 && trust.length === 0) return 1; //edge case
  let count = new Array(n + 1).fill(0); ///count array with n+1 elements filled with 0
  for (let i = 0; i < trust.length; i++) {
    count[trust[i][0]]--; //decrement the count of the person who trusts
    count[trust[i][1]]++; //increment the count of the person who is trusted
  }
  for (let j = 0; j < count.length; j++) {
    if (count[j] === n - 1) return j; //if the count of the person who is trusted is n-1, then he is the judge
  }
  return -1; //judge not found
};
