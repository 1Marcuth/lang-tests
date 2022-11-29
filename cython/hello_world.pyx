def py():
    print("Hello World")

cdef int c():
    print("Hello World")
    return 0

cpdef int cpp():
    print("Hello World")

py()
c()
cpp()