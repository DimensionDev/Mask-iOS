#include <stdarg.h>
#include <stdbool.h>
#include <stdint.h>
#include <stdlib.h>

typedef struct RustByteSlice {
  const uint8_t *bytes;
  uintptr_t len;
} RustByteSlice;

/**
 * # Safety
 *
 * The caller should provide a pointer that points to a valid bytes array of size eqqual to `len`
 */
struct RustByteSlice rust_request(const uint8_t *bytes, uintptr_t len);

/**
 * # Safety
 *
 * The caller should provide a `RustByteSlice` struct with a valid bytes array and its size
 */
void rust_free(struct RustByteSlice input);
