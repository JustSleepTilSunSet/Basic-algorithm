class Solution(object):
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        map = {};
        result = [];
        # nums.sort()
        print(nums)
        for index in range(0,len(nums)):
            if map.get(nums[index]) is not None:
                return [map.get(nums[index]), index]
            diff = target - nums[index]
            map[diff] = index 

        return [];
            