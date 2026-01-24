class Solution:
    def minPairSum(self, nums: List[int]) -> int:
        sortedArr = sorted(nums)
        counter = len(sortedArr) -1
        pairArr = []
        for num in range(len(sortedArr) // 2):
            pairArr.append(sortedArr[num] + sortedArr[counter])
            counter -= 1

        return max(pairArr)


test1, test2 = Solution(), Solution()
print(test1.minPairSum([3, 5, 2, 3]))  # 7
print(test2.minPairSum([3, 5, 4, 2, 4, 6]))  # 8