{
  description = "A TypeScript and React web application";
  inputs = {
    nixpkgs.url = "nixpkgs";
    flake-utils.url = "github:numtide/flake-utils";
  };
  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = import nixpkgs { inherit system; };

        packages = with pkgs; [
          git-cliff

          nodejs_20

          nodePackages.pnpm
        ];

      in {

        devShells.default = pkgs.mkShell {
          buildInputs = packages;
          shellHook = with pkgs; ''
            echo "🔮 Welcome to Insite-Pro frontend monorepo development environment!"
          '';
        };
      });
}
