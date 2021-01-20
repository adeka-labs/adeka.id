// @ts-ignore
import tw from 'twin.macro';

const ScrollToTop = () => {
  return (
    <div
      tw="sticky bottom-0 right-0 z-20 bg-transparent rounded-full"
      onClick={() => console.log('Click Scroll To Top')}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25.887"
        height="25.943"
        viewBox="0 0 9.887 5.943"
      >
        <path
          id="Path_157"
          data-name="Path 157"
          d="M6502.544,2805l3.529,3.53-3.529,3.529"
          transform="translate(-2803.586 6507.073) rotate(-90)"
          fill="none"
          stroke="#ff825c"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
        />
      </svg>
    </div>
  );
};

export default ScrollToTop;
