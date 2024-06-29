import { Undo2 } from 'lucide-react';

const Keypad = () => {
  return (
    <div className="grid grid-cols-3 gap-2 max-w-xs mx-auto font-medium text-lg md:text-xl">
      <button className="col-span-1 bg-primary/30 hover:bg-primary/20 transform transition-colors duration-100 ease-in-out px-2 py-4 rounded text-primary">C</button>
      <button className="col-span-2 bg-primary/30 hover:bg-primary/20 transform transition-colors duration-100 ease-in-out px-2 py-4 rounded text-primary flex justify-center">
        <Undo2 className="size-6" />
      </button>
      
      <button className="col-span-1 bg-primary/30 hover:bg-primary/20 transform transition-colors duration-100 ease-in-out px-2 py-4 rounded text-primary">1</button>
      <button className="col-span-1 bg-primary/30 hover:bg-primary/20 transform transition-colors duration-100 ease-in-out px-2 py-4 rounded text-primary">2</button>
      <button className="col-span-1 bg-primary/30 hover:bg-primary/20 transform transition-colors duration-100 ease-in-out px-2 py-4 rounded text-primary">3</button>
      
      <button className="col-span-1 bg-primary/30 hover:bg-primary/20 transform transition-colors duration-100 ease-in-out px-2 py-4 rounded text-primary">4</button>
      <button className="col-span-1 bg-primary/30 hover:bg-primary/20 transform transition-colors duration-100 ease-in-out px-2 py-4 rounded text-primary">5</button>
      <button className="col-span-1 bg-primary/30 hover:bg-primary/20 transform transition-colors duration-100 ease-in-out px-2 py-4 rounded text-primary">6</button>
      
      <button className="col-span-1 bg-primary/30 hover:bg-primary/20 transform transition-colors duration-100 ease-in-out px-2 py-4 rounded text-primary">7</button>
      <button className="col-span-1 bg-primary/30 hover:bg-primary/20 transform transition-colors duration-100 ease-in-out px-2 py-4 rounded text-primary">8</button>
      <button className="col-span-1 bg-primary/30 hover:bg-primary/20 transform transition-colors duration-100 ease-in-out px-2 py-4 rounded text-primary">9</button>
      
      <div className='col-span-1'/>
      <button className="col-span-1 bg-primary/30 hover:bg-primary/20 transform transition-colors duration-100 ease-in-out px-2 py-4 rounded text-primary">0</button>
      <div className='col-span-1'/>

    </div>
  );
}

export default Keypad;
