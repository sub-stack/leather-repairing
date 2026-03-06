export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <img 
        src="/img/logo.png" 
        alt="Bag Revival Lab Logo" 
        className="w-10 h-10 lg:w-12 lg:h-12 object-contain rounded-lg" 
        referrerPolicy="no-referrer" 
      />
      <span className="text-xl font-bold tracking-tight">
        皮袋復活社
      </span>
      <span className="text-xl font-bold tracking-tight text-warm-coral">
        工作室
      </span>
    </div>
  );
}
