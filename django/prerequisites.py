'''
  conditional statements
  list , tuple, set , dict
  def
  class

  find total sal of array of three emp objects
'''

class Emp:
    def __init__(self,name,salary):
        self.name = name  
        self.salary = salary
    def __str__(self):
        return f'[name:{self.name},salary:{self.salary}]'
    def __repr__(self):
        return self.__str__()

employee = [Emp('anand',2000),
            Emp('raju',2000),
            Emp('jaya',2000)]

tot = 0.0
for e in employee: # element iterator
    tot += e.salary
    print(e) #print each emp
print("total emp is ",tot)