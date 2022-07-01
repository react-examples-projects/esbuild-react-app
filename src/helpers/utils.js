export const makeCancelable = (promise) => {
  let hasCanceled_ = false;

  const wrappedPromise = new Promise((resolve, reject) => {
    promise.then(
      (val) => (hasCanceled_ ? reject({ isCanceled: true }) : resolve(val)),
      (error) => (hasCanceled_ ? reject({ isCanceled: true }) : reject(error))
    );
  });

  return {
    promise: wrappedPromise,
    cancel() {
      hasCanceled_ = true;
    },
  };
};

export const scrollTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

/**
 * Remove accents per each letter
 * @param {FileList} files The images
 * @returns A promise if the files are valids
 */
export function normalizeText(text) {
  const result = text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  return result;
}
