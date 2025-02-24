class Solution(object):
    def isValid(self, s):
        """
        :type s: str
        :rtype: bool
        """
        stacks = [];
        map = {
            ')':'(',
            ']':'[',
            '}':'{'
        }
        for sub_s in s:
            # print(sub_s)
            if sub_s in ['(','[','{']:
                stacks.append(sub_s)
                continue;
            try:
                top_sign = stacks.pop(len(stacks)-1);
                if top_sign!=map[sub_s]:
                    return False
            except Exception:
                return False
        # print(stacks)
        return not(len(stacks) > 0)