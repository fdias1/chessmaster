from rest_framework.views import APIView
from .models import ChessPiece
from .serializers import ChessPieceSerializer
from rest_framework.response import Response
from rest_framework import status
from rest_framework import viewsets


class ChessPieceViewSet(viewsets.ModelViewSet):
    serializer_class=ChessPieceSerializer
    queryset=ChessPiece.objects.all()

class ChessPiecePosition:
    def __init__(self, x_pos=None, y_pos=None, chess_pos=None):
        if chess_pos == None:
            try :
                if x_pos < 1 or x_pos > 8 or y_pos < 1 or y_pos > 8:
                    raise Exception("invalid value")

                pos_converter = ['a','b','c','d','e','f','g','h']
                self.x_pos = x_pos
                self.y_pos = y_pos
                self.chess_pos = pos_converter[x_pos-1] + str(y_pos)
                self.is_valid = True

            except:
                self.is_valid = False
        else:
            try:
                pos_converter = {'a':1, 'b':2, 'c':3, 'd':4, 'e':5, 'f':6, 'g':7, 'h':8 }

                if pos_converter[chess_pos[0]] == None or int(chess_pos[1]) < 1 or int(chess_pos[1]) > 8:   
                    raise Exception("invalid value")

                self.chess_pos = chess_pos
                self.x_pos = pos_converter[chess_pos[0]]
                self.y_pos = int(chess_pos[1])
                self.is_valid = True

            except:
                self.is_valid = False

class ChessPieceMovements(APIView):
    def calc_next_two_movements(self, pos: ChessPiecePosition, chess_piece:ChessPiece):
        x_pos_converter = ['a','b','c','d','e','f','g','h']
        possible_positions = []

        ## rook and queen can be in any position of the board after two movements
        if chess_piece.type == 'rook' or chess_piece.type == 'queen':
            for x in range(1,9):
                for y in range(1,9):
                    new_pos = ChessPiecePosition(x_pos=x, y_pos=y)
                    print(x)
                    possible_positions.append(new_pos.chess_pos)

        ## pawns only go one square forward if they're light and backwards if it's a dark one
        ## also, if it's its first move (from the 2nd row (light) or 7th row (dark)), they can move up to two squares
        if chess_piece.type == 'pawn':
            mult = 1 if chess_piece.color == 'l' else -1

            pos_1 = ChessPiecePosition(x_pos=pos.x_pos, y_pos=(pos.y_pos+1*mult))
            pos_2 = ChessPiecePosition(x_pos=pos.x_pos, y_pos=(pos.y_pos+2*mult))
            pos_3 = ChessPiecePosition(x_pos=pos.x_pos, y_pos=(pos.y_pos+3*mult))

            if pos_1.is_valid: possible_positions.append(pos_1.chess_pos)
            if pos_2.is_valid: possible_positions.append(pos_2.chess_pos)

            if (chess_piece.color == 'l' and pos.y_pos == 2) or (chess_piece.color == 'd' and pos.y_pos == 7):
                if pos_3.is_valid: possible_positions.append(pos_3.chess_pos)

        ## King can move in any direction but just one square at a time
        if chess_piece.type == 'king':
            for x in range(pos.x_pos-2,pos.x_pos+3):
                for y in range(pos.y_pos-2,pos.y_pos+3):
                    new_pos = ChessPiecePosition(x_pos=x, y_pos=y)
                    if new_pos.is_valid: possible_positions.append(new_pos.chess_pos)

        ## bishop can be in any square of the same color of its initial square after two movements
        ## the sum of the coordinates of a square can be used to get its color (odd sum = light, even sum = dark)
        if chess_piece.type == 'bishop':
            square_color = (pos.x_pos + pos.y_pos)%2
            for x in range(1,9):
                for y in range(1,9):
                    if (x+y)%2 == square_color:
                        new_pos = ChessPiecePosition(x_pos=x, y_pos=y)
                        if new_pos.is_valid: possible_positions.append(new_pos.chess_pos)


        ## unlike the other big pieces, we cannot describe the possible positions of a knight 
        ## after two movements with a simple patter like 'every light square' or 'every square up to 2 squares far 
        ## its initial position'. but sure there is a pattern and we can find it using algorithms
        if chess_piece.type == 'knight':
            def get_knight_positions_after_one_move(pos:ChessPiecePosition):
                positions=[]
                ## knights can go 'left' (-1) OR 'right' (1)
                for x_dir in [-1,1]:
                    ## AND knights can go 'up'(1) or 'down'(-1)
                    for y_dir in [-1,1]:
                        ## and it always move two squares in a axis direction AND one in on other:
                        for type_movement in [(1,2), (2,1)]:
                            possible_move = (x_dir * type_movement[0] , y_dir * type_movement[1]) 
                            new_pos = ChessPiecePosition(x_pos=pos.x_pos + possible_move[0], y_pos=pos.y_pos + possible_move[1])
                            if new_pos.is_valid: positions.append(new_pos)

                return positions

            ## create a set to prevent dulicated values
            possible_positions_set = set()
            ## calculate every fist move and then, calculate every next move from these positions
            knight_first_positions = get_knight_positions_after_one_move(pos)
            for knight_first_position in knight_first_positions:
                for knight_final_position in get_knight_positions_after_one_move(knight_first_position):
                    possible_positions_set.add(knight_final_position.chess_pos)

            ## and return a sorted and unique-values list after all this hard work!
            possible_positions = sorted(list(possible_positions_set))

        return possible_positions
        

    def get(self, request, pk=None, chess_pos=None):
        if pk == None or ChessPiecePosition(chess_pos=chess_pos).is_valid == False:
            return Response({'details':'invalid parameters'}, status=status.HTTP_400_BAD_REQUEST)

        try:
            chess_piece = ChessPiece.objects.get(pk=pk)
            pos = ChessPiecePosition(chess_pos=chess_pos)
        except ChessPiece.DoesNotExist:
            return Response({'details':'piece not found'},status=status.HTTP_404_NOT_FOUND)

        possible_positions = self.calc_next_two_movements(pos, chess_piece)
        return Response(possible_positions)
