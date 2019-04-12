def sieveOfEratosthenes(num):
   count = 0
   primes = []
   for i in range(num):
      primes[i] = True
      i += 1

   return primes


sieveOfEratosthenes(20)
