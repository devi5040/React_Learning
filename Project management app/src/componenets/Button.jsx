function Button({ children, ...props }) {
  return (
    <button
      className="py-2 text-xs px-4 rounded-md bg-stone-700 text-stone-400 md:text-base hover:bg-stone-600 hover:text-stone-100"
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
