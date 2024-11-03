//Pick: Використовується для вибору лише деяких властивостей з типу AllType.

type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

function compare (top: Pick<AllType, 'name' | 'color'>, bottom:Pick<AllType, 'position' | 'weight'>) {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}


//https://www.dhiwise.com/post/writing-clearer-code-with-typescript-pick-comprehensive-guide
